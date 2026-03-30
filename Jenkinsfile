pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('password-vercel-token')  
        VERCEL_ORG_ID = 'team_4VQiAU8KshdeTVKo3JRqaU5a'
        VERCEL_PROJECT_ID = 'prj_tKFdKTIDn2l8Wh71665YijL2580v'
        EMAIL_TO = 'Nizamuddin8053@gmail.com'
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Nizamuddin8053/PasswordGenerator.git'
            }
        }

        stage('Install Vercel CLI') {
            steps {
                sh 'npm install -g vercel'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                sh '''
                vercel pull --yes --environment=production --token=$VERCEL_TOKEN
                vercel build --prod --token=$VERCEL_TOKEN
                vercel deploy --prebuilt --prod --token=$VERCEL_TOKEN
                '''
            }
        }
    }

    post {
        success {
            mail to: "${EMAIL_TO}",
                 subject: "✅ Deployment Successful",
                 body: "Your Password Generator app has been successfully deployed on Vercel."
        }

        failure {
            mail to: "${EMAIL_TO}",
                 subject: "❌ Deployment Failed",
                 body: "Deployment failed. Please check Jenkins logs."
        }
    }
}