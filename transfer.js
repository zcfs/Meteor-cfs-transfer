/**
 * @namespace FS
 * @type DownloadTransferQueue
 * 
 * There is a single downloads transfer queue per client (not per CFS)
 */
FS.downloadQueue = new DownloadTransferQueue();