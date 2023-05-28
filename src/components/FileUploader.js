import React from 'react';
import "./FileUploader.css";

class FileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: []
    };
  }

  handleFileUpload = (event) => {
    const files = event.target.files;
    const selectedFiles = [...this.state.selectedFiles];

    for (let i = 0; i < files.length; i++) {
      selectedFiles.push(files[i]);
    }

    this.setState({ selectedFiles });
  };

  render() {
    const { selectedFiles } = this.state;

    return (
        <div className="file-uploader">
        
        <label htmlFor="upload-input">Select Files</label>
        <input
          id="upload-input"
          type="file"
          multiple
          onChange={this.handleFileUpload}
        />
        {selectedFiles.length > 0 && (
          <div>
            <h4>Selected Files:</h4>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default FileUploader;
