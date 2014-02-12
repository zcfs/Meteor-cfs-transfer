// There is a single uploads transfer queue per client (not per CFS)
FS.downloadQueue = new DownloadTransferQueue();

// There is a single downloads transfer queue per client (not per CFS)
FS.uploadQueue = new UploadTransferQueue();