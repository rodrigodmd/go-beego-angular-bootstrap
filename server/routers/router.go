// @APIVersion 1.0.0
// @Title beego Test API
// @Description beego has a very cool tools to autogenerate documents for your API
// @Contact astaxie@gmail.com
// @TermsOfServiceUrl http://beego.me/
// @License Apache 2.0
// @LicenseUrl http://www.apache.org/licenses/LICENSE-2.0.html
package routers

import (
	"github.com/rodrigodmd/go-beego-angular-bootstrap/server/controllers"

	"github.com/astaxie/beego"
)

func init() {
	// Services for the static content of the webapp
	beego.BConfig.WebConfig.DirectoryIndex = true
	beego.Router("/", &controllers.MainController{})
	beego.SetStaticPath("/app", "static")

	// Here we need to include an manage all the services that will consume the web app
	ns := beego.NewNamespace("/v1",
		beego.NSNamespace("/object",
			beego.NSInclude(
				&controllers.ObjectController{},
			),
		),
		beego.NSNamespace("/user",
			beego.NSInclude(
				&controllers.UserController{},
			),
		),
	)
	beego.AddNamespace(ns)
}
