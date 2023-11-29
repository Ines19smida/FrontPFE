import $ from "jquery";

class User {
    constructor(app) {
        this.app = app
        this.load()
    }
    load(callable, token) {
        let my = this
        if (!token) {
            token = this.app.$cookies.get('token')
        }
        if (token !== null) {
            $.ajax({
                url: 'http://127.0.0.1:8000/api/profile',
                dataType: "json",
                method: 'GET',
                data: {
                    offre: false
                },
                headers: {
                    "authorization": "Bearer " + token
                },
                success(data) {
                    my.app.$cookies.set('user', data.user)
                    if (callable) {
                        callable.call()
                    }
                },
                error() {
                    my.app.$cookies.set('user', {type: 'GEST'})
                    token = null
                }
            })
        } else {
            my.app.$cookies.set('user', {type: 'GEST'})
        }
    }

    get(keyName) {
        let user = this.app.$cookies.get('user')
        if (keyName === null) {
            return user
        }
        return user[keyName]
    }

    login(data, callable, object) {
        const my = this
        $.ajax({
            url: 'http://127.0.0.1:8000/api/connecter',
            dataType: "json",
            method: 'POST',
            data: data,
            success(data){
                my.app.$cookies.set('token', data.token)
                my.load(callable)
            },
            error(jqXHR){
                object.errorMessage = jqXHR.responseJSON.message
            }
        })
    }

    logout(callable) {
        this.app.$cookies.remove('token')
        this.app.$cookies.set('user', {type: 'GEST'})
        if (callable) {
            callable.call()
        }
    }
}
export default {
    install: (app) => {
        app.config.globalProperties.$user = new User(app)
    }
}