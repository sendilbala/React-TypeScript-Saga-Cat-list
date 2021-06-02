import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { UploadCatImageProps } from '../../types/UploadCatImage.types';
import { routeUrls } from '../../../../routes';


class UploadCatImage extends React.Component<UploadCatImageProps, {file:string, imagePreviewUrl:string}> {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }


  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    const { dispatchUploadCatImage } = this.props;


    dispatchUploadCatImage({file:this.state.file, subId:'test'});

  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];


    reader.onloadend = () => {
      this.setState({
        file: file.name,
        imagePreviewUrl: reader.result.toString()
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div>
      <Grid  container  spacing={1}>
        <Grid item xs={12}>
          <Paper className='paper'>
            <a className="link" href={routeUrls.HOME_URL}>Home</a>
          </Paper>
        </Grid>
      </Grid>

      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            id='file-input'
            //ref={this.fileInput}
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
      </div>
    )
  }
}
  

export default UploadCatImage;