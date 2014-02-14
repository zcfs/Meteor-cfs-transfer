/**
 * @namespace FS
 * @type DownloadTransferQueue
 * 
 * There is a single downloads transfer queue per client (not per CFS)
 */
FS.downloadQueue = new DownloadTransferQueue();

/**
 * @namespace FS
 * @type UploadTransferQueue
 * 
 * There is a single uploads transfer queue per client (not per CFS)
 */
FS.uploadQueue = new UploadTransferQueue();