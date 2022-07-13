// Helpers
import {
    responseError,
    responseGET,
    responsePOST,
} from "../../helpers/response";

// Service Class
import FileService from "./service";

class FileController extends FileService {
    async getFiles(req, res) {
        try {
            const result = await this.getFilesList();
            const response = responseGET(null, result);
            return res.status(200).json(response);
        } catch (err) {
            const error = responseError([err]);
            res.status(500).json(error);
        }
    }
}

export default FileController;
