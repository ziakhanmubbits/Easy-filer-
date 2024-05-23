import { View, Text, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import Style from './style';
import Header from '../../ImportHeader/Header';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import FontFamily from '../../../assets/customFonts/customFonts';

const Faqs = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const questions = [
        {
          number: 1,
          text: "How does EasyFiler Work?",
          content:
            "EasyFiler is a powerful tool with a user-friendly interface that asks simple " +
            "questions and makes the tax filing process in Pakistan easier. All you have to do is " +
            "answer with a yes or no and provide basic information like your salary income, " +
            "taxes paid and investments made etc. Based on your responses, our system " +
            "works out everything and shows your final tax refund / obligation, as applicable, " +
            "after adjustment of taxes already paid or withheld.\n\n" +
            "We've developed checks and balances to ensure that we have gathered every piece " +
            "of information required to submit your tax return and notify you if something doesn't " +
            "add up.\n\n" +
            "Once you've completed the process, you can simply sit back and relax. Our " +
            "integrated system will proceed to file your return of income, under the supervision of " +
            "tax experts. You will be notified once the process is completed."
        },
        {
          number: 2,
          text: "Why should I use Easyfiler when my existing tax consultant is doing the same work for me?",
          content:
            "One of the most important principles that we kept in mind while developing this " +
            "system was to educate individuals on their finances and help them understand where " +
            "their money is going.\n\n" +
            "Tax consultants usually file your tax return on their own without any involvement on " +
            "your part. You are never in control of your tax return and simply rely on the expertise " +
            "of your consultant.\n\n" +
            "Once you start filing income tax return using EasyFiler, you will realize important " +
            "details about your finances and ways to save taxes. EasyFiler follows a step-by-step " +
            "process so that you end up filing your return with the correct information. And while " +
            "you're preparing your tax returns, it will also guide you on various tax credits " +
            "available to you so that you could save maximum taxes. You also don't need to keep " +
            "track of past years' information because we keep the information stored in our " +
            "system for future references.\n\n" +
            "So, feel free to contact us if you want to learn more about how to apply for taxes in Pakistan."
        },
        {
          number: 3,
          text: "What do I need to get started?",
          content:
            "EasyFiler is a unique combination of technology and tax expertise to simplify the " +
            "tax filing process. It only takes three steps to get you going with your tax filing.\n\n" +
            "1. Signup with EasyFiler\n" +
            "2. Enter basic information and answer simple questions\n" +
            "3. Pay for our services using common payment methods like debit / credit card."
        },
        {
          number: 4,
          text: "What information do I need to provide to complete the process?",
          content:
            "The information required to complete the process is fairly simple and mainly " +
            "depends on the sources of your income and the type of your financial transactions and " +
            "assets. Some of the documents that will be handy in answering the questions are as follows:\n\n" +
            "- Salary Certificate provided by your employer.\n" +
            "- Bank Statement or certificate from the bank showing the profit paid and taxes " +
            "deducted by the bank, if any.\n" +
            "- Personal utility bills for expenses incurred and advance tax paid.\n" +
            "- Certificate of capital gains and tax thereon, issued by NCCPL against your stock " +
            "trading activities, if any.\n" +
            "- Statement of investment in mutual funds, if any.\n" +
            "- In case of air travel in business class, a copy of air ticket / invoice indicating the " +
            "amount of tax deducted.\n" +
            "- Certificate of tax deduction provided by your cellular network company in case of " +
            "a post-paid connection.\n" +
            "- Invoices issued by educational institutions indicating tax paid, if applicable.\n" +
            "- In case of any vehicle purchased during the year, a copy of the registration book / " +
            "documents issued by the Excise."
        },
        {
          number: 5,
          text: "Is there any benefit of becoming a filer besides compliance?",
          content:
            "Tax filers can take the benefit of various taxes paid by them on various transactions " +
            "like taxes paid on utility bills, cash transactions, educational fees, business " +
            "class air tickets, purchase of motor vehicles and properties etc. In addition, filers can " +
            "also get tax credits for investment in mutual funds and insurance premiums " +
            "and donations or zakat paid to approved charitable organizations.\n\n" +
            "A non-filer is also subject to higher withholding tax rates including on bank " +
            "transfers, motor vehicle taxes, capital gains, dividend income, etc."
        },
        {
          number: 6,
          text: "My employer already deducts tax on my salary and I don't have any additional source of income. Do I still have to file my tax return?",
          content:
            "Yes. Your employer might have deducted the applicable tax on your salary. However, " +
            "you should still file your tax return to avoid penal consequences of non-filing and / or " +
            "paying extra taxes on various transactions levied on non-filers."
        },
        {
          number: 7,
          text: "I don't have any property or valuables in my name; do I still have to file a wealth statement along with the income tax return?",
          content:
            "Wealth statement has to be filed by a " +
            "resident individual who is required to " +
            "file his income tax return. It is simply a " +
            "statement of your assets and liabilities.\n\n" +
            "In this statement, you have to mention " +
            "the details of all the assets that are in " +
            "your name or your dependents like your " +
            "wife and children. Some of the common " +
            "examples of assets are properties, " +
            "vehicles, jewelry, cash at bank and saving " +
            "certificates, etc. You are also required to " +
            "provide details of your personal expenses " +
            "as part of your wealth statement e.g. rent, " +
            "traveling, utility charges, education, and " +
            "other household expenses.\n\n" +
            "Even if you do not have any assets and " +
            "liabilities, being a resident individual, you " +
            "are required to file a Wealth Statement " +
            "showing movement of assets from the " +
            "beginning of the year on July 1 till the end of " +
            "the year on June 30 and reconcile the income " +
            "earned with expenses incurred during the " +
            "year."
        },
        {
          number: 8,
          text: "Is there any penalty if I don't file any tax return?",
          content:
            "Yes. If you fail to file your tax return then " +
            "you could be fined with a minimum penalty " +
            "of Rs 20,000."
        },
        {
          number: 9,
          text: "What about customer support?",
          content:
            "EasyFiler is backed by leading tax experts so " +
            "you can be sure of receiving best services " +
            "from the experts. You can reach us any " +
            "time using the following modes:\n\n" +
            "Phone: (021) 38892069 (300 am. 10 530 " +
            "p.m. Monday to Friday)\n" +
            "Email: info@EasyFiler.com"
        },
        {
          number: 10,
          text: "Easyfiler is asking me to enter my sensitive information. Will my information remain secure and confidential?",
          content:
            "Yes! Your tax information is secured using " +
            "top security standards and transmitted " +
            "over secure computer network to ensure " +
            "the security and confidentiality of your " +
            "data."
        }
      ];
      // Feel free to use this updated array in your React Native component.
    
    const handleQuestionPress = (question) => {
        setSelectedQuestion(question);
        setModalVisible(true);
    };
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={Style.innerView}>
                <Header />
            </View>
            <ScrollView>
                {questions.map((question) => (
                    <View key={question.number} style={Style.view}>
                        <TouchableOpacity style={Style.toucable} onPress={() => handleQuestionPress(question)}>
                            <Text style={Style.text}>{`${question.number}.${question.text}`}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <Pressable
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={Style.modalmainview}>
                        <View style={{ width: responsiveScreenWidth(70), marginTop: responsiveScreenHeight(2), alignItems: "center" }}>
                            <Text style={Style.modaltext}>{`${selectedQuestion?.number}.${selectedQuestion?.text}`}</Text>
                        </View>
                        <View style={{ width: responsiveScreenWidth(70), marginTop: responsiveScreenHeight(2), alignItems: "center" }}>
                            <Text style={{ color: "black", fontSize: responsiveScreenFontSize(1.8), fontFamily: FontFamily.MONTSERRAT_Regular, textAlign: "center" }}>
                                {selectedQuestion?.content}
                            </Text>
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}
export default Faqs;