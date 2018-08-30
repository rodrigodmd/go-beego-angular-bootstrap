package controllers

import "github.com/astaxie/beego"

// This controller is only created to redirect to the angular static folder
type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Redirect("/app/", 302)
}
