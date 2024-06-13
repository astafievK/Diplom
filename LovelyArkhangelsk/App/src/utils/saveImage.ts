import fileSaver from 'file-saver';

export const saveImageToPublicFolder = (fileName: string, blob: Blob) => {
    fileSaver.saveAs(blob, fileName);
};