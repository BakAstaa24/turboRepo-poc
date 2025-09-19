"use server"

export default async function createProduct(data: FormData) {
    await fetch(`${process.env.API_URL}/products`, {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
            'Content-Type': 'application/json'
        }
    });

}