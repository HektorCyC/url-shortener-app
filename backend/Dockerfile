FROM public.ecr.aws/lambda/nodejs:14

COPY ./backend .

RUN npm run build

CMD ["dist/lambda.handler"]
