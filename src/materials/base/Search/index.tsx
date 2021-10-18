import React, { memo, useCallback } from 'react';
import styles from './index.less';
import { ISearchConfig } from './schema';
import { IsPC } from '@/utils/tool';
import logo from '@/assets/search.png';
const FormComponent = (props: ISearchConfig & { isTpl: boolean }) => {
  const { bgColor, searchBgColor, color, placeholder } = props;

  const isEditorPage = window.location.pathname.indexOf('editor') > -1;
  return (
    <>
      {props.isTpl && (
        <div>
          <img src={logo} alt="" />
        </div>
      )}
      {!props.isTpl && (
        <div
          className={styles.searchWrap}
          style={{
            backgroundColor: bgColor,
            overflow: 'hidden',
            position: 'absolute',
            pointerEvents: isEditorPage || IsPC() ? 'none' : 'initial',
          }}
        >
          <input
            className={styles.search}
            type="text"
            style={{ color: color, backgroundColor: searchBgColor }}
            value={placeholder}
          />
        </div>
      )}
    </>
  );
};

export default memo(FormComponent);
