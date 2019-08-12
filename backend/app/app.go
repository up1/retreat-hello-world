package app

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

// App :: structure of demo application
type App struct {
	Router *mux.Router
}

// Result :: data
type Result struct {
	Message string
}

// New :: create new application
func New() *App {
	router := mux.NewRouter()
	router.HandleFunc("/api1", func(w http.ResponseWriter, r *http.Request) {
		result := Result{"สวัสดีชาวโลก"}
		json, err := json.Marshal(result)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(json)
	})

	app := &App{}
	app.Router = router
	return app
}
