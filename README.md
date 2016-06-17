Link the git repo to google cloud source repo.

gcloud alpha functions deploy helloworld --source-url https://source.developers.google.com/p/{project-id}/r/default --source /hello-gcf --source-branch master --trigger-http
gcloud alpha functions describe helloworld
curl -i -X POST https://us-central1.{project-id}.cloudfunctions.net/helloworld --data '{"message":"Hello World!"}'
