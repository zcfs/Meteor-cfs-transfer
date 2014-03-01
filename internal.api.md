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


> ```var addDownloadedData = function(col, fsFile, storeName, start, data, callback) { ...``` [downloadTransferQueue.js:229](downloadTransferQueue.js#L229)

-


---
> File: ["transfer.js"](transfer.js)
> Where: {client}

-

#### <a name="FS.downloadQueue"></a>FS.downloadQueue DownloadTransferQueue&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This property __downloadQueue__ is defined in `FS`*


There is a single downloads transfer queue per client (not per CFS)

> ```FS.downloadQueue = new DownloadTransferQueue();``` [transfer.js:7](transfer.js#L7)

-
