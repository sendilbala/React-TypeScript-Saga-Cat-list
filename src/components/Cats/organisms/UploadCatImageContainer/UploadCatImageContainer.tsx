import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UploadCatImage from '../../molecules/UploadCatImage';
import {
  fetchUploadCatImageRequest,
} from './UploadCatImageContainer.actions';
import { ApplicationState } from '../../../../store';
import { UploadCatImageProps } from '../../types/UploadCatImage.types';

const UploadCatImageContainer: React.FC<UploadCatImageProps> = (
  props: UploadCatImageProps
) => <UploadCatImage {...props} />;

const mapStateToProps = ({ uploadCatImageState }: ApplicationState) => ({
  data: uploadCatImageState.data,
  isRequest: uploadCatImageState.isRequest,
  error: uploadCatImageState.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatchUploadCatImage: fetchUploadCatImageRequest,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UploadCatImageContainer);
