import { Component ,OnInit} from '@angular/core';
import {Http} from '@angular/http'; // (1)
import 'rxjs/add/operator/map'; // (2)
import {LoginService} from '../service/login.service'


@Component({
    selector: 'sl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})


export class LoginComponent {
    obj:Object; //返回对象
    code:string;//验证码
    pwd:string;//密码
    con_pwd:string;//确认密码

constructor(private LoginService: LoginService) {
        this.obj = {}
        this.code='';
        this.pwd='';
        this.con_pwd='';
    }
    //确认登录结果
    check_login() {
        console.log('点击结果',this.code, this.pwd,this.con_pwd)
        this.LoginService.checkLogin()
            .subscribe(res => {
                console.log(res,'结果')
                if(res && res.statuscode==200){
                    this.obj = res.data
                }
            });
    }

    
    
}
