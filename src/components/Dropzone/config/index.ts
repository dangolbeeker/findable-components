import { gbToBytes } from '../../../utils';

//https://react-dropzone.js.org/#section-accepting-specific-file-types
export const ACCEPTED_FILE_TYPES = {
  'image/*': ['.gif', '.jpeg', '.jpg', '.tiff'],
  'image/x-dwg': ['.dwg'],
  'text/*': ['.plain'],
  'application/zip': ['.zip'],
  // 'application/x-zip-compressed': ['.x-zip-compressed'],
  // 'application/x-7z-compressed': ['.x-7z-compressed'],
  // 'application/x-rar': ['.x-rar'],
  'application/pdf': ['.pdf'],
  'application/msword': ['.doc'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
    '.docx',
  ],
  'application/vnd.ms-excel': ['.xls'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
    '.xlsx',
  ],
  'application/vnd.ms-powerpoint': ['.ppt'],
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': [
    '.pptx',
  ],
};

export const MAX_FILES = 20;
export const MAX_FILE_SIZE = gbToBytes(5);
