import React, {Component} from 'react';
import Dialog, {SlideAnimation, DialogContent} from 'react-native-popup-dialog';

class PopupDialog extends Component {
  state = {};
  render() {
    const slideAnimation = new SlideAnimation({
      slideFrom: 'bottom',
    });
    const {onTouchOutside, visible} = this.props;
    return (
      <Dialog
        height={300}
        onTouchOutside={onTouchOutside}
        visible={visible}
        dialogAnimation={slideAnimation}>
        <DialogContent>{this.props.children}</DialogContent>
      </Dialog>
    );
  }
}

export default PopupDialog;
