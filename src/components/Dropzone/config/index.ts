import { gbToBytes } from '../../../utils';

//https://react-dropzone.js.org/#section-accepting-specific-file-types
export const ACCEPTED_FILE_TYPES = {
  'image/*': ['.gif', '.jpeg', '.jpg', '.tiff', '.dwg'],
  'text/*': ['.plain'],
  'application/*': [
    '.zip',
    '.x-zip-compressed',
    '.x-7z-compressed',
    '.x-rar',
    '.pdf',
    '.msword',
    '.vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.vnd.ms-excel',
    '.vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.vnd.ms-powerpoint',
    '.vnd.openxmlformats-officedocument.presentationml.presentation',
  ],
};

export const MAX_FILES = 20;
export const MAX_FILE_SIZE = gbToBytes(5);
