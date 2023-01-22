<<<<<<< HEAD
<<<<<<< HEAD
import { createReadStream } from 'fs'
import { readdir, lstat } from 'fs/promises'
=======
import { readdir, stat } from 'fs/promises'
>>>>>>> 9875abf (feat: back functionnalities)
=======
import { readdir, lstat } from 'fs/promises'
>>>>>>> fb33eaf (fix: file & link stat)

const KB = 1024
const SIZE_LEVEL = ['B', 'KB', 'MB', 'GB', 'TB']

/**
 * Download file selected
 * @param {import('express').Response} res 
 * @param {string} path 
 * @param {number} filesize 
 */
async function downloadFile(res, path, filesize) {
    const pathArray = path.split('/')
    const filename = pathArray[pathArray.length - 1]

    res.setHeader('Content-Disposition', 'attachment; filename=' + filename)
    res.setHeader('Content-Type', 'application/octet-stream')
    res.setHeader('Transfer-Encoding', 'deflate')
    res.setHeader('Content-Length', filesize)
<<<<<<< HEAD
<<<<<<< HEAD
    res.sendFile(path)
=======
    res.sendFile(file)
>>>>>>> 9875abf (feat: back functionnalities)
=======
    res.sendFile(path)
>>>>>>> 79a04ef (feat: setting view path ; fix: symbolic link)
}

/**
 * Recursive function that onvert Byte into KByte, MByte..
 * @param {number} size
 * @param {number} level 0 -> B, 1 -> KB...
 */
function convertSize(size, level = 0) {
    if (size < KB) return { size, level }
    else return convertSize(size / KB, ++level)
}

/**
 * Create file Information Object
 * @param {string} name Filename
 * @param {Date} mTime Last datetime modification
 * @param {Date} bTime Datetime the file was created
 * @param {number} filesize Filesize
 * @returns The file information object
 */
function createFileInfo(name, mTime, bTime, filesize) {
    const fileInfo = { name, mTime, bTime }
    if (filesize) {
        const { size, level } = convertSize(filesize)
        const fixedSize = Number.isInteger(size) ? size : new Number(size).toFixed(1)
        fileInfo.size =  fixedSize + ' ' + SIZE_LEVEL[level]
    }
    return fileInfo
}

/**
 * Arrange directories and files
 * @param {string} path 
 * @returns Array of directory information and array of file information 
 */
async function arrangeDirData(path) {
    const dirs = await readdir(path, { encoding: 'utf-8' })
    
    const directories = []
    const files = []
<<<<<<< HEAD
<<<<<<< HEAD
    
    for (let dir of dirs) {
        const dirent = await lstat(path + '/' + dir)

        if (!dirent.isSymbolicLink()) {
            if (dirent.isFile())
                files.push(createFileInfo(dir, dirent.mtime, dirent.birthtime, dirent.size))
            else directories.push(createFileInfo(dir, dirent.mtime, dirent.birthtime))
        }
=======

=======
    
>>>>>>> fb33eaf (fix: file & link stat)
    for (let dir of dirs) {
        const dirent = await lstat(path + '/' + dir)

        if (dirent.isFile())
            files.push(createFileInfo(dir, dirent.mtime, dirent.birthtime, dirent.size))
        else directories.push(createFileInfo(dir, dirent.mtime, dirent.birthtime))
>>>>>>> 9875abf (feat: back functionnalities)
    }

    return { directories, files }
}

export { downloadFile, convertSize, arrangeDirData }