function easyHttp() {
    this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function (url) {
    var self = this.http;
    return new Promise(function (resolve, reject) {
        self.open('GET', url, true);
        self.onload = function() {
            if(self.status === 200) {
                resolve(self.responseText);
            } else {
                reject('Error');
            }
        }
        
        self.send();
    });
}

easyHttp.prototype.post = function (url, data) {
    var self = this.http;
    return new Promise(function (resolve, reject) {
        self.open('POST', url, true);
        self.setRequestHeader('Content-Type', 'application/json');
        self.onload = function() {
            if(self.status === 201 || self.status === 200) {
                resolve({ responseText: self.responseText, actualresponse: self.response });
            } else {
                reject(self.response);
            }
        }
        
        self.send(data);
    });
};

easyHttp.prototype.put = function (url, data) {
    var self = this.http;
    return new Promise(function (resolve, reject) {
        self.open('POST', url, true);
        self.setRequestHeader('Content-Type', 'application/json');
        self.onload = function() {
            if(self.status === 201 || self.status === 200) {
                resolve({ responseText: self.responseText, actualresponse: self.response });
            } else {
                reject(self.response);
            }
        }
        
        self.send(data);
    });
};

easyHttp.prototype.delete = function (url) {
    var self = this.http;
    return new Promise(function (resolve, reject) {
        self.open('DELETE', url, true);
        self.onload = function() {
            if(self.status === 200) {
                resolve(self.responseText);
            } else {
                reject('Error');
            }
        }
        
        self.send();
    });
}