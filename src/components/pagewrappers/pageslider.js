import ReactDom from 'react-dom';
import './pageslider.css';

const createPageSlider = (options = {}) => {
  const defaultOptions = {
    default: 'page',
    active: 'active',
    right: 'page-right',
    center: 'page-center',
    left: 'page-left',
  };

  const pageStyles = Object.assign({}, defaultOptions, options);

  const ONTRANSITIONEND = window.ontransitionend !== undefined
    && 'transitionend' || 'webkitTransitionEnd';

  const keyHistory = [];

  let dir = 0;

  const slider = {

    componentWillAppear(cb) {
      keyHistory.push(this.props.location.key);

      const el = ReactDom.findDOMNode(this);

      el.className = pageStyles.default;

      el.className += ` ${pageStyles.right}`;

      requestAnimationFrame(() => {
        el.className += ` ${pageStyles.active} ${pageStyles.center}`;
      });

      const onAppearEnd = () => {
        el.removeEventListener(ONTRANSITIONEND, onAppearEnd);
        el.className = `${pageStyles.default} ${pageStyles.center}`;
        cb();
      };

      el.addEventListener(ONTRANSITIONEND, onAppearEnd);
    },

    componentWillEnter(cb) {
      const key = this.props.location.key;
      const len = keyHistory.length;
      if (key === keyHistory[len - 2]) {
        keyHistory.pop();
        dir = -1;
      } else {
        keyHistory.push(key);
        dir = 1;
      }

      const fromDir = dir === -1 ? pageStyles.left : pageStyles.right;

      const el = ReactDom.findDOMNode(this);

      el.className = pageStyles.default;

      el.className += ` ${fromDir}`;

      requestAnimationFrame(() => {
        el.className += ` ${pageStyles.active}`;
        requestAnimationFrame(() => {
          el.className += ` ${pageStyles.center}`;
        });
      });

      const onEnterEnd = () => {
        el.removeEventListener(ONTRANSITIONEND, onEnterEnd);
        el.className = `${pageStyles.default} ${pageStyles.center}`;
        cb();
      };

      el.addEventListener(ONTRANSITIONEND, onEnterEnd);
    },

    componentWillLeave(cb) {
      const toDir = dir === -1 ? pageStyles.right : pageStyles.left;

      const el = ReactDom.findDOMNode(this);

      el.className = pageStyles.default;

      requestAnimationFrame(() => {
        el.className += ` ${pageStyles.active}`;
        requestAnimationFrame(() => {
          el.className += ` ${toDir}`;
        });
      });

      const onLeaveEnd = () => {
        el.removeEventListener(ONTRANSITIONEND, onLeaveEnd);
        cb();
      };

      el.addEventListener(ONTRANSITIONEND, onLeaveEnd);
    },
  };

  return slider;
};

const pageSliderAttr = createPageSlider();

export default function (Page) {
  let slidingPage = null;
  if (typeof Page === 'function') {
    slidingPage = class extends Page {
    };
    Object.keys(pageSliderAttr).forEach(key => {
      slidingPage.prototype[key] = pageSliderAttr[key];
    });
  }
  return slidingPage;
}
