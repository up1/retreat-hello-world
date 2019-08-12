package app

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

// App :: structure of demo application
type App struct {
	Router *mux.Router
}

// New :: create new application
func New() *App {
	router := mux.NewRouter()
	router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "สวัสดีชาวโลก")
	})

	app := &App{}
	app.Router = router
	return app
}
