package top.dhcblog.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.dhcblog.dao.MessageMapper;
import top.dhcblog.entity.Message;

import java.util.List;

/**
 * @作者：dhc
 * @创建时间：11:10 2018/9/16
 * @描述：默认描述
 */
@Service
public class MsgServiceImpl implements MsgService{
    @Autowired
    private MessageMapper messageMapper;
    @Override
    public List<Message> getMsgByPage() {
        return messageMapper.getMsgByPage();
    }

    @Override
    public void insertMsg(Message msg) {
        messageMapper.insert(msg);
    }

    public void setMessageMapper(MessageMapper messageMapper) {
        this.messageMapper = messageMapper;
    }
}
