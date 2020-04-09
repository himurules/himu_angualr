import { Component } from '@angular/core';

@Component({
  selector: 'app-book-item-list',
  templateUrl: './book-item-list.component.html',
  styleUrls: ['./book-item-list.component.css']
})
export class BookItemListComponent {
  bookItems = [
    {
      id: 1,
      title: 'Her Body and Other Parties by Carmen Maria Machado',
      description: 'The debut book from Machado explores the various violences inflicted in women\'s bodies, her writing walking a tightrope between the erotic and horrific, the amusing and the macabre. In \'The Husband Stitch\' she explores the body-wrenching pain of labour and the joke of men asking the surgeon for an extra stitch when putting their wife back together, while \'Eight Bites\' digs into the fairytale promises of weight-loss transformation.',
      price: 19,
      rating: 5,
      isRead: true,
      category: 'Drama',
      imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/71tzslvoccl-1-1581952447.jpg?crop=1xw:1xh;center,top&resize=980:*',
    },
    {
      id: 2,
      title: 'Grand Union by Zadie Smith',
      description: 'Having mastered the novel and essay formats, British literary stalwart Zadie Smith turned her pen to short stories in 2019. The 19 different tales in Grand Union are sprawling in their reach, touching on everything from single motherhood to the free speech debate in universities, objectifying men to the urban myth of Michael Jackson leaving New York with friends on the morning of 9/11, all told in Smith\'s commanding prose.',
      price: 23,
      rating: 4,
      isRead: false,
      category: 'Reality',
      imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/71skcbutjwl-1581952158.jpg?crop=1xw:1xh;center,top&resize=980:*',
    },
    {
      id: 3,
      title: 'Bad Behaviour by Mary Gaitskill',
      description: 'Long, long before Phoebe Waller-Bridge caused a stir with Fleabag, Mary Gaitskill was dissecting the power dynamics of sex and relationships between men and women with her intense tone of voice. Bad Behaviour burns with longing and passion, from stories about ex partners haunting a city to a woman waiting for a date to show up while he watches her from across the street. These stories are uncomfortable, prescient and fascinating.',
      price: 27,
      rating: 5,
      isRead: true,
      category: 'Fiction',
      imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/9780241383100.jpg?crop=1xw:1xh;center,top&resize=980:*',
    },
    {
      id: 4,
      title: 'You Know You Want This by Kristen Roupenian',
      description: 'In 2017 Kristen Roupenian\'s New Yorker short story \'Cat Person\' went viral, sparking a debate about sexual power and consent in the midst of the rising #MeToo movement. Her follow-up collection of short stories strays beyond the boy-meets-girl premise into much darker territory. Whether it is the tale of a couple who terrorise a third party and eventually talk him into an unspeakable act, or a children\'s game of hide and seek which ends in twisted horror, these tales make Roupenian\'s breakout story look like child\'s play.',
      price: 34,
      rating: 3,
      isRead: true,
      category: 'Fiction',
      imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/71e7b2egnpl-1581951813.jpg?crop=1xw:1xh;center,top&resize=980:*',
    },
    {
      id: 5,
      title: 'Florida by Lauren Groff',
      description: 'Snakes, crocodiles and lizards stalk the pages of this 2018 collection from one of America\'s most celebrated novelists, in which the muggy, murky state of Florida is always a principle character. Groff\'s mastery of language, plot and dialogue are on full display in a set of stories that linger long after you\'ve closed the last page.',
      price: 18,
      rating: 5,
      isRead: false,
      category: 'Reality',
      imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/florida-lauren-groff-1520438945.jpg?crop=1xw:1xh;center,top&resize=980:*',
    },
    {
      id: 6,
      title: 'There Are Little Kingdoms by Kevin Barry',
      description: 'What radiates from every page of Kevin Barry\'s work is a relish for language and a sheer joy in story-telling: not since Irvine Welsh has an author writing in English made writing seem like such fun. There is plenty of pathos, too, in his tales of lost souls and misfiring Irish families and friendships. This is funny, stirring stuff from a unique talent.',
      price: 23,
      rating: 4,
      isRead: true,
      category: 'Drama',
      imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/there-are-little-kingdoms-paperback-cover-9781786890177.jpg?crop=1xw:1xh;center,top&resize=980:*',
    },
  ];
  onBookItemRemove(bookItem){

  }
}
