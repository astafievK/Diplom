export function generateRandomFilename(originalFilename: string): string {
    const extension = originalFilename.split('.').pop();
    const randomName = Math.random().toString(36).substr(2, 9);
    return `${randomName}.${extension}`;
}