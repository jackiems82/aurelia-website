export class WebApi{
  

  public sendEmail(to: string, message: string): void {
    alert("Sending " + message + " to " + to);
    // return new Promise(resolve=> resolve(true));
  }
}