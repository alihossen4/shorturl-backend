class ApiSuccess {
  constructor(statusCode, message, data) {
    this.success = statusCode < 400;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data ?? {};
  }
  static success(message="success",data={}){
    return new ApiSuccess(200,message,data);
  }
  
  static created(message="created",data={}){
    return new ApiSuccess(201,message,data);
  }

  static accepted(message="accepted",data={}){
    return new ApiSuccess(202,message,data);
  }
}
export default ApiSuccess;