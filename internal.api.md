> File: ["downloadTransferQueue.js"](downloadTransferQueue.js)
> Where: {client}

-

#### <a name="UploadTransferQueue"></a>new UploadTransferQueue([options])&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-

__Arguments__

* __options__ *{Object}*    (Optional)
    - __connection__ *{Object}*    (Default = a separate connection to the default Meteor DDP URL)
The connection to use

-

> ```DownloadTransferQueue = function(options) { ...``` [downloadTransferQueue.js:14](downloadTransferQueue.js#L14)

-

#### <a name="DownloadTransferQueue.prototype.downloadFile"></a>*downloadtransferqueue*.downloadFile(fsFile, storeName)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
```
Adds a chunked download request to the transfer queue. After being downloaded,
the browser will save the file like a normal download.
```
-
*This method __downloadFile__ is defined in `prototype` of `DownloadTransferQueue`*

__Arguments__

* __fsFile__ *{[FS.File](#FS.File)}*  
The file to download.
* __storeName__ *{String}*  
The store from which to download it.

-

__Returns__  *{undefined}*



> ```DownloadTransferQueue.prototype.downloadFile = function(``` [downloadTransferQueue.js:54](downloadTransferQueue.js#L54)

-

#### <a name="DownloadTransferQueue.prototype.progress"></a>*downloadtransferqueue*.progress(fsFile, storeName)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
```
Reactive status percent for the queue in total or a specific file
```
-
*This method __progress__ is defined in `prototype` of `DownloadTransferQueue`*

__Arguments__

* __fsFile__ *{[FS.File](#FS.File)}*  
The file
* __storeName__ *{String}*  
The name of the store to retrieve from

-

__Returns__  *{Number}*
Progress percentage



> ```DownloadTransferQueue.prototype.progress = function(fsFile, storeName) { ...``` [downloadTransferQueue.js:108](downloadTransferQueue.js#L108)

-

#### <a name="DownloadTransferQueue.prototype.cancel"></a>*downloadtransferqueue*.cancel()&nbsp;&nbsp;<sub><i>Client</i></sub> ####
```
Cancel all downloads.
```
-
*This method __cancel__ is defined in `prototype` of `DownloadTransferQueue`*

__Returns__  *{undefined}*


> ```DownloadTransferQueue.prototype.cancel = function() { ...``` [downloadTransferQueue.js:126](downloadTransferQueue.js#L126)

-

#### <a name="DownloadTransferQueue.prototype.isDownloadingFile"></a>*downloadtransferqueue*.isDownloadingFile(fsFile, storeName)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This method __isDownloadingFile__ is defined in `prototype` of `DownloadTransferQueue`*

__Arguments__

* __fsFile__ *{[FS.File](#FS.File)}*  
* __storeName__ *{String}*  

-

__Returns__  *{Boolean}*
Are we currently downloading this file from this store?


Determines whether we are currently downloading this file from this store.

> ```DownloadTransferQueue.prototype.isDownloadingFile = function(fsFile, storeName) { ...``` [downloadTransferQueue.js:139](downloadTransferQueue.js#L139)

-

#### <a name="cacheDownload"></a>cacheDownload(col, fsFile, storeName, start, callback)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This method is private*

__Arguments__

* __col__ *{[Meteor.Collection](#Meteor.Collection)}*  
* __fsFile__ *{[FS.File](#FS.File)}*  
* __storeName__ *{String}*  
* __start__ *{Number}*  
* __callback__ *{Function}*  

-

__Returns__  *{undefined}*


> ```var cacheDownload = function(col, fsFile, storeName, start, callback) { ...``` [downloadTransferQueue.js:157](downloadTransferQueue.js#L157)

-

#### <a name="unCacheDownload"></a>unCacheDownload(col, fsFile, storeName, callback)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This method is private*

__Arguments__

* __col__ *{[Meteor.Collection](#Meteor.Collection)}*  
* __fsFile__ *{[FS.File](#FS.File)}*  
* __storeName__ *{String}*  
* __callback__ *{Function}*  

-

__Returns__  *{undefined}*


> ```var unCacheDownload = function(col, fsFile, storeName, callback) { ...``` [downloadTransferQueue.js:174](downloadTransferQueue.js#L174)

-

#### <a name="downloadChunk"></a>downloadChunk(tQueue, fsFile, storeName, start)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This method is private*

__Arguments__

* __tQueue__ *{[TransferQueue](#TransferQueue)}*  
* __fsFile__ *{[FS.File](#FS.File)}*  
* __storeName__ *{String}*  
* __start__ *{Number}*  

-

__Returns__  *{undefined}*


Downloading is a bit different from uploading. We cache data as it comes back
rather than before making the method calls.

> ```var downloadChunk = function(tQueue, fsFile, storeName, start) { ...``` [downloadTransferQueue.js:190](downloadTransferQueue.js#L190)

-

#### <a name="addDownloadedData"></a>addDownloadedData(col, fsFile, storeName, start, data, callback)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This method is private*

__Arguments__

* __col__ *{[Meteor.Collection](#Meteor.Collection)}*  
* __fsFile__ *{[FS.File](#FS.File)}*  
* __storeName__ *{String}*  
* __start__ *{Number}*  
* __data__ *{Uint8Array}*  
* __callback__ *{Function}*  

-

__Returns__  *{undefined}*


> ```var addDownloadedData = function(col, fsFile, storeName, start, data, callback) { ...``` [downloadTransferQueue.js:227](downloadTransferQueue.js#L227)

-


---
> File: ["uploadTransferQueue.js"](uploadTransferQueue.js)
> Where: {client}

-

#### <a name="_taskHandler"></a>_taskHandler(task, next)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This method is private*

__Arguments__

* __task__ *{Object}*  
* __next__ *{Function}*  

-

__Returns__  *{undefined}*


> ```var _taskHandler = function(task, next) { ...``` [uploadTransferQueue.js:11](uploadTransferQueue.js#L11)

-

#### <a name="_errorHandler"></a>_errorHandler(data, addTask)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This method is private*

__Arguments__

* __data__ *{Object}*  
* __addTask__ *{Function}*  

-

__Returns__  *{undefined}*


> ```var _errorHandler = function(data, addTask) { ...``` [uploadTransferQueue.js:46](uploadTransferQueue.js#L46)

-

#### <a name="UploadTransferQueue"></a>new UploadTransferQueue([options])&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-

__Arguments__

* __options__ *{Object}*    (Optional)
    - __connection__ *{Object}*    (Default = a separate connection to the default Meteor DDP URL)
The connection to use

-

> ```UploadTransferQueue = function(options) { ...``` [uploadTransferQueue.js:58](uploadTransferQueue.js#L58)

-

#### <a name="UploadTransferQueue.resumeUploadingFile"></a>*uploadtransferqueue*.resumeUploadingFile(File)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This method __resumeUploadingFile__ is defined in `UploadTransferQueue`*

__Arguments__

* __File__ *{[FS.File](#FS.File)}*  
to resume uploading

-

__TODO__
```
* Not sure if this is the best way to handle resumes
```

> ```self.resumeUploadingFile = function (fileObj) { ...``` [uploadTransferQueue.js:93](uploadTransferQueue.js#L93)

-

#### <a name="UploadTransferQueue.uploadFile"></a>*uploadtransferqueue*.uploadFile(File)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This method __uploadFile__ is defined in `UploadTransferQueue`*

__Arguments__

* __File__ *{[FS.File](#FS.File)}*  
to upload

-

__TODO__
```
* Check that a file can only be added once - maybe a visual helper on the FS.File?
```

> ```self.uploadFile = function(fileObj) { ...``` [uploadTransferQueue.js:113](uploadTransferQueue.js#L113)

-


---
> File: ["transfer.js"](transfer.js)
> Where: {client}

-

#### <a name="FS.downloadQueue"></a>*fs*.downloadQueue DownloadTransferQueue&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This property __downloadQueue__ is defined in `FS`*


There is a single downloads transfer queue per client (not per CFS)

> ```FS.downloadQueue = new DownloadTransferQueue();``` [transfer.js:7](transfer.js#L7)

-

#### <a name="FS.uploadQueue"></a>*fs*.uploadQueue UploadTransferQueue&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This property __uploadQueue__ is defined in `FS`*


There is a single uploads transfer queue per client (not per CFS)

> ```FS.uploadQueue = new UploadTransferQueue();``` [transfer.js:15](transfer.js#L15)

-
