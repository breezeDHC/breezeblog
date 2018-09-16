package top.dhcblog.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import top.dhcblog.entity.Message;
import top.dhcblog.service.MsgService;
import top.dhcblog.service.MsgServiceImpl;

import java.util.List;

/**
 * @作者：dhc
 * @创建时间：11:12 2018/9/16
 * @描述：默认描述
 */
@Controller
public class MsgController {
    @Autowired
    MsgService msgService;
    @RequestMapping("/insertMsg")
    public String insert(Message msg){
        msgService.insertMsg(msg);
        return "message";
    }

    @RequestMapping("/searchMsg")
    public String search(Model model){
        List<Message> list = msgService.getMsgByPage();
        //Model用参数的形式传进来，用Model来存储返回的数据，等价于用session、request等setAttribute
        model.addAttribute("msgList",list);
        return "message";
    }

    public void setMsgService(MsgServiceImpl msgService) {
        this.msgService = msgService;
    }
}
