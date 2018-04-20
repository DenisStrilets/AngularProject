
export class UserSendModel{
constructor(
public email:string,
public password:string,
public name:string,
public location:string,

public exist?:boolean
){}

}