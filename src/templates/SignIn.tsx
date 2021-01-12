import React,{useState, useCallback, useEffect} from "react";
import { TextInput, PrimaryButton } from "../components/UIkit";
import { signIn } from "../reducks/users/opration";
import {useDispatch} from "react-redux"
import { push } from "connected-react-router";
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);


const SignIn = () => {

    // const [currentUserName, setCurrentUserName] = React.useState("");
    // useEffect(() => {
    //     const init = async() => {
    //         const currentUser = await Auth.currentAuthenticatedUser();
    //         setCurrentUserName(currentUser.username);
    //     }
    //     init()
    // }, []);

    // const signOut = async() => {
    //     try {
    //         await Auth.signOut();
    //     } catch (error) {
    //         console.log('error signing out: ', error);
    //     }
    //     document.location.reload();
    // }

    const dispatch = useDispatch()

    const [email, setEmail] = useState(""),
          [password, setPassword] = useState("");

    const inputEmail = useCallback( (event) => {
        setEmail(event.target.value)
    }, [setEmail])

    const inputPassword = useCallback( (event) => {
        setPassword(event.target.value)
    }, [setPassword])

    return(
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">ログイン画面</h2>
                <TextInput
                fullWidth={true}
                label={"メールアドレス"}
                multiline={false}
                required={true}
                rows={1}
                value={email}
                type={"email"}
                onChange={inputEmail}
                />
                <TextInput
                fullWidth={true}
                label={"パスワード"}
                multiline={false}
                required={true}
                rows={1}
                value={password}
                type={"password"}
                onChange={inputPassword}
                />
                <div className="module-spacer--medium"></div>
                <div className="center">
                    <PrimaryButton 
                        label={"ログイン"}
                        onClick={ () => dispatch(signIn(email, password))}
                    />
                </div>
                <div className="module-spacer--medium"></div>

                <p onClick={()=> dispatch(push("/signin/reset"))}>パスワードを忘れた方はこちら</p>
                <p onClick={()=> dispatch(push("/signup"))}>アカウントをお持ちではない方はこちら</p>
        </div>
        // <div>
        //     <h1>{currentUserName}さんこんにちは！</h1>
        //     <button onClick={signOut}>サインアウト</button>
        // </div>
    );
}

export default SignIn;