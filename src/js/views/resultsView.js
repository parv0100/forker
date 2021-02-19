import view from './view.js';
import previewView from './previewView.js';

import icons from 'url:../../img/icons.svg';

class resultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe';
  _message = '';
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new resultsView();
