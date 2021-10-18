import React, { memo, useCallback } from 'react';
import styles from './index.less';
import { IQuickLinkConfig } from './schema';
import logo from '@/assets/quicklink.png';
const FormComponent = (props: IQuickLinkConfig & { isTpl: boolean }) => {
  // const isEditorPage = window.location.pathname.indexOf('editor') > -1;
  const { bgColor, color } = props;
  return (
    <>
      {props.isTpl && (
        <div>
          <img src={logo} alt="" style={{ width: '100%' }} />
        </div>
      )}
      {!props.isTpl && (
        <div
          className={styles.quickLinkWrap}
          style={{
            backgroundColor: bgColor,
          }}
        >
          <ul
            style={{
              color: color,
            }}
          >
            <li
              style={{
                borderBottom: 'solid 3px #fff',
              }}
            >
              推荐
            </li>
            <li>全棉四件套</li>
            <li>磨毛四件套</li>
            <li>婚庆多件套</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default memo(FormComponent);
