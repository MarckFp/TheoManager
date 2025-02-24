import Gun from 'gun'
import 'gun/sea'

interface ICongregation {
    id?: string;
    name: string;
    password: string;
    jw_code?: string;
    address?: string;
    city?: string;
    zipcode?: string;
    country?: string;
}

const gun = Gun({
    peers: []
})

//CREATE
export async function createCongregation(congregationData: ICongregation) {
    const keyPair = await Gun.SEA.pair();
    const congregationID = keyPair.pub;
    const congregation = gun.get("congregations").get(congregationID);

    // Store congregation metadata
    congregation.put({
        id: congregationID,
        name: congregationData.name,
        password: congregationData.password,
        jw_code: congregationData.jw_code || "",
        address: congregationData.address || "",
        city: congregationData.city || "",
        zipcode: congregationData.zipcode || "",
        country: congregationData.country || ""
    });

    localStorage.setItem('congregationID', congregationID);

    return congregationID;
}

//UPDATE
export async function updateCongregation(congregationData: ICongregation) {
    if (!congregationData.id) {
        throw new Error("Congregation ID is required for update.");
    }
    const congregation = gun.get("congregations").get(congregationData.id);

    congregation.put({
        id: congregationData.id,
        name: congregationData.name,
        password: congregationData.password,
        jw_code: congregationData.jw_code,
        address: congregationData.address,
        city: congregationData.city,
        zipcode: congregationData.zipcode,
        country: congregationData.country
    });

    return congregationData.id;
}

//DELETE
export async function deleteCongregation(congregationID: string) {
    const congregation = gun.get("congregations").get(congregationID);

    congregation.put(null);

    return congregationID;
}

//GET
export async function getCongregation(congregationID: string) {
    const congregation = gun.get("congregations").get(congregationID);

    return congregation;
}