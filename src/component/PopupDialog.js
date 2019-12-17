import React, {Component} from 'react';
import Dialog, {DialogTitle, DialogContent} from 'react-native-popup-dialog';
import colors from '../config/colors';

class PopupDialog extends Component {
  state = {};
  render() {
    const {onTouchOutside, visible, dialogTitle, animation} = this.props;
    const title = dialogTitle ? (
      <DialogTitle
        style={{backgroundColor: colors.dark_primary_color}}
        textStyle={{color: '#FFF'}}
        title={dialogTitle}
      />
    ) : null;
    return (
      <Dialog
        dialogTitle={title}
        height={300}
        onTouchOutside={onTouchOutside}
        visible={visible}
        dialogAnimation={animation}>
        <DialogContent>{this.props.children}</DialogContent>
      </Dialog>
    );
  }
}

export default PopupDialog;
