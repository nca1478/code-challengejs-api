class FileRouter {
    constructor(router, controller) {
        this.error = new Error();

        if (!router) {
            this.error.dependencyError = "Express Router is undefined";
            throw this.error.dependencyError;
        } else {
            this.router = router;
        }

        if (!controller) {
            this.error.dependencyError = "Controller is undefined";
            throw this.error.dependencyError;
        } else {
            this.controller = controller;
        }

        // Get List Files
        this.router.get("/", this.controller.getFiles.bind(this.controller));
    }

    setRoutes() {
        return this.router;
    }
}

export default FileRouter;
