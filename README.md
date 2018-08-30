# go-beego-angular-bootstrap
This is an example app of using golang, beego framework, angular js and bootstrap




# Steps Followed to create this project

## Beego server

Create the service beego app:

    bee api server
    
Go to server and add dep package manager

    cd server
    dep init
    
In the controller package (server/controllers) create the main controller to redirect to the static angular app:

````go
package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Redirect("/app/", 302)
}

````
    
In the "router.go" file, add the static folder for angular and and the main controller:
````go
beego.BConfig.WebConfig.DirectoryIndex = true
beego.Router("/", &controllers.MainController{})
beego.SetStaticPath("/app", "static")
````  
 
 Create the static folder:
 
    cd server
    mkdir static
    
 ## Angular web app
 
 Create a new angualar project using angular cli
 
 