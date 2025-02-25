import { gun } from '$lib/db'

export interface ICongregation {
    id?: string;
    name: string;
    password: string;
    jw_code?: string;
    address?: string;
    city?: string;
    zipcode?: string;
    country?: string;
    name_order: string;
    week_order: string;
}

//CREATE
export async function createCongregation(congregationData: ICongregation) {
    const keyPair = await Gun.SEA.pair();
    const congregationID = keyPair.pub;
    const congregation = gun.get("congregations").get(congregationID);

    try {
        const encryptedPassword = await Gun.SEA.encrypt(congregationData.password, keyPair);

        congregation.put({
            id: congregationID,
            name: congregationData.name,
            password: encryptedPassword,
            jw_code: congregationData.jw_code ?? "",
            address: congregationData.address ?? "",
            city: congregationData.city ?? "",
            zipcode: congregationData.zipcode ?? "",
            country: congregationData.country ?? "",
            name_order: congregationData.name_order ?? "firstname",
            week_order: congregationData.week_order ?? "monday"
        });

        localStorage.setItem('congregationID', congregationID);
        localStorage.setItem('congregationKeyPair', JSON.stringify(keyPair));
        return congregationID;
    } catch (error) {
        console.error("Error creating congregation:", error);
        throw new Error("Failed to create congregation.");
    }
}

//UPDATE
export async function updateCongregation(congregationData: ICongregation) {
    if (!congregationData.id) {
        throw new Error("Congregation ID is required for update.");
    }
    const congregation = gun.get("congregations").get(congregationData.id);

    try {
        let updatedData: Partial<ICongregation> = { ...congregationData };

        if (congregationData.password) {
            const keyPairString = localStorage.getItem('congregationKeyPair');
            if (!keyPairString) {
                return;
            }
            const keyPair = JSON.parse(keyPairString);
            updatedData.password = await Gun.SEA.encrypt(congregationData.password, keyPair);
        }

        congregation.put(updatedData);
        return congregationData.id;
    } catch (error) {
        console.error("Error updating congregation:", error);
        throw new Error("Failed to update congregation.");
    }
}

//DELETE
export async function deleteCongregation(congregationID: string) {
    try {
        gun.get("congregations").get(congregationID).put(null);
        return congregationID;
    } catch (error) {
        console.error("Error deleting congregation:", error);
        throw new Error("Failed to delete congregation.");
    }
}

//GET
export async function getCongregation(congregationID: string) {
    return new Promise((resolve, reject) => {
        gun.get("congregations").get(congregationID).once(async (data) => {
            if (!data) {
                resolve(null);
                return;
            }

            try {
                const keyPairString = localStorage.getItem('congregationKeyPair');
                if (!keyPairString) {
                    resolve({...data, password: ""});
                    return;
                }
                const keyPair = JSON.parse(keyPairString);
                const decryptedPassword = await Gun.SEA.decrypt(data.password, keyPair);
                resolve({ ...data, password: decryptedPassword ?? "" });
            } catch (error) {
                console.error("Error decrypting password:", error);
                reject(new Error("Failed to retrieve congregation."));
            }
        });
    });
}
