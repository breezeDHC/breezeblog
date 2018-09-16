package top.dhcblog.service;


import top.dhcblog.entity.Message;

import java.util.List;

/**
 * @作者：dhc
 * @创建时间：11:08 2018/9/16
 * @描述：默认描述
 */
public interface MsgService {
    List<Message> getMsgByPage();

    void insertMsg(Message msg);
}
