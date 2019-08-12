package main

import (
	a "demo/app"
	"fmt"
	"net/http"
)

func main() {
	port := "8080"
	var app *a.App
	app = a.New()
	fmt.Println("Server running on port " + port)
	http.ListenAndServe(":"+port, app.Router)
}
