import React, { PureComponent } from 'react';

import BarcodeScannerContainer from 'containers/BarcodeScanner';

class MainPage extends PureComponent {
  state = {
    isCameraEnabled: false,
  }

  handleEnableClick = () => {
    const { isCameraEnabled } = this.state;
    this.setState({ isCameraEnabled: !isCameraEnabled });
  }

  render() {
    const { isCameraEnabled } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleEnableClick}>Enable Camera</button>
        {
          isCameraEnabled && (
            <BarcodeScannerContainer />
          )
        }
      </div>
    );
  }
}

export default MainPage;
