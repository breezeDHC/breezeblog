package top.dhcblog.dao;
import org.springframework.stereotype.Repository;
import top.dhcblog.entity.Message;

import java.util.List;

@Repository
public interface MessageMapper {
    int insert(Message record);

    List<Message> getMsgByPage();
}