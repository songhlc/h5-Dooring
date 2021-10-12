import React, { memo, useCallback } from 'react';
import styles from './index.less';
import { ISearchConfig } from './schema';
import { IsPC } from '@/utils/tool';
import logo from '@/assets/form.png';
const FormComponent = (props: ISearchConfig & { isTpl: boolean }) => {
  const { bgColor, searchBgColor, color } = props;

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
          className={styles.formWrap}
          style={{
            backgroundColor: bgColor,
            color: color,
            overflow: 'hidden',
            position: 'absolute',
            pointerEvents: isEditorPage || IsPC() ? 'none' : 'initial',
          }}
        >
          <input type="text" style={{ backgroundColor: searchBgColor }} placeholder="testme" />
        </div>
      )}
    </>
  );
};

export default memo(FormComponent);
