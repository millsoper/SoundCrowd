var React = require('react'),
    Modal = require('react-modal'),
    SessionForm = require('./session_form.jsx'),
    PropTypes = React.PropTypes,
    EntryIndex = require('./entry_index.jsx');

var EntryPage = React.createClass({
  getInitialState: function () {
    return { modalIsOpen: false };
  },
  openModal: function () {
    this.setState({modalIsOpen:true});
  },
  closeModal: function () {
    this.setState({modalIsOpen: false});
  },
  render: function() {
    var customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight          : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
      Modal.setAppElement('body');
    return (
      <div className ="landing-page">
        <section className="masthead">
          <nav>
            <div className="masthead-logo">
              <img src="cloud-icon.png"></img>
              <p>soundcrowd</p>
            </div>
            <ul>
              <li><a onClick={this.openModal}>Login</a></li>
              <li><a className="masthead-signup" onClick={this.openModal}>Create Account</a></li>
            </ul>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              shouldCloseOnOverlayClick={false}
              style={customStyles} >

              <SessionForm></SessionForm>

            </Modal>
          </nav>
          <div className="entry-search">
            <h3>Find the stories you love. Discover new worlds. Connect directly with storytellers.</h3>
            <input type="text" placeholder="Search for stories, storytellers, tags" className="entry-search-bar"></input>
            <p>or</p>
            <a onClick={this.openModal} className="entry-add">Add Your Own</a>
          </div>
        </section>
        <EntryIndex clickaction={this.openModal}/>
      </div>
    );

  }

});

module.exports = EntryPage;
