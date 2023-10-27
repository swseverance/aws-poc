npm run build:all
aws s3 cp ./dist/apps/eqt s3://swseverance-eqt --recursive
aws s3 cp ./dist/apps/fi s3://swseverance-fi --recursive
