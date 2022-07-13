// Dependencies
import axios from "axios";

// Axios Config
import { filesConfig } from "../../config/axios";

class FileService {
    async getFilesList() {
        const responseFiles = await axios(
            filesConfig("https://echo-serv.tbxnet.com/v1/secret/files")
        )
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error;
            });

        return responseFiles;
    }
}

export default FileService;
