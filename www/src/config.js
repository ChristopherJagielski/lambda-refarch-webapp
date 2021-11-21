// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "603d07fhamntmhnfifmaj61mcr",     // CognitoClientID
  "api_base_url": "https://5h7yt7evl1.execute-api.eu-west-1.amazonaws.com/prod",     // TodoFunctionApi
  "cognito_hosted_domain": "mylambdaapptest-mylambdaapptest1.auth.eu-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1kcsytontmcwp.amplifyapp.com"                                      // AmplifyURL
};

export default config;
