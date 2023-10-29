import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import Chip from 'src/components/ui/chip';
import { tagsWithNames } from 'src/constants/userDataWithDisplayData.constants';
import useAppSelector from 'src/hooks/useAppSelector';
import { setQuestionnaireData } from 'src/store/reducers/questionnaireData.reducer';
import { Tag } from 'src/types';
import styles from './styles';

const TagsChoose = () => {
   const { tags } = useAppSelector((state) => state.questionnaireData.data)!;

   const dispatch = useDispatch();

   const setTags = (tags: Tag[]) => dispatch(setQuestionnaireData({ tags }));

   const handleTagChoose = (tag: Tag) => {
      if (tags.includes(tag)) {
         setTags(tags.filter((t) => t !== tag));
      } else {
         setTags([...tags, tag]);
      }
   };

   const renderItems = useCallback(
      () => tagsWithNames.map(({ tag, name }) => <Chip selected={tags.includes(tag)} onSelect={() => handleTagChoose(tag)} text={name} key={tag} />),
      [tags]
   );

   return <View style={styles.container}>{renderItems()}</View>;
};

export default TagsChoose;
