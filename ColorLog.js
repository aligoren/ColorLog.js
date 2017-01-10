class Log {
		constructor() {
     this.LogDate = '[' + new Date().toLocaleString() + '] ';
     
     this.InfoLabel = '[INFO] ';
     this.InfoColor = 'background: #3b5998; color: #fff'
     
     this.DebugLabel = '[DEBUG] ';
     this.DebugColor = 'background: #008000; color: #fff'
     
     this.ErrorLabel = '[ERROR] ';
     this.ErrorColor = 'background: #dc0000; color: #fff'
     
     this.CriticalLabel = '[CRITICAL] ';
     this.CriticalColor = 'background: #f00; color: #fff'
     
     this.WarningLabel = '[WARNING] ';
     this.WarningColor = 'background: #ffa500; color: #fff'
     
     this.TraceLabel = '[TRACE] ';
     this.TraceColor = 'background: #76272D; color: #fff'
    }
    
    Info(msg) {
    	console.log('%c' + this.LogDate + this.InfoLabel + msg + ' ', this.InfoColor);
    }

		Debug(msg) {
    	console.log('%c' + this.LogDate + this.DebugLabel + msg + ' ', this.DebugColor);
    }
	
    Error(msg) {
    	console.log('%c' + this.LogDate + this.ErrorLabel + msg + ' ', this.ErrorColor);
    }
    
    Critical(msg) {
    	console.log('%c' + this.LogDate + this.CriticalLabel + msg + ' ', this.CriticalColor);
    }
    
    Warning(msg) {
    	console.log('%c' + this.LogDate + this.WarningLabel + msg + ' ', this.WarningColor);
    }
    
    Trace(msg) {
    	console.log('%c' + this.LogDate + this.TraceLabel + msg + ' ', this.TraceColor);
    }
    
    Custom(msg, label, bgcolor, color) {
    	this.CustomColor = 'background: ' + bgcolor + '; color: ' + color
      this.CustomLabel = '[' + label + '] '
    	console.log('%c' + this.LogDate + this.CustomLabel + msg + ' ', this.CustomColor);
    }
}
